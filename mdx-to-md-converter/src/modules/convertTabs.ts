export function convertTabs(content: string): string {
  let result = content;
  let iterations = 0;
  const maxIterations = 10; // Prevent infinite loops
  
  while (iterations < maxIterations) {
    const newResult = processTabsOnce(result, 0);
    if (newResult === result) {
      break; // No more changes
    }
    result = newResult;
    iterations++;
  }
  
  return result;
}

function processTabsOnce(input: string, depth: number): string {
  // Find the first <Tabs component
  const tabsStart = input.indexOf('<Tabs');
  if (tabsStart === -1) {
    return input;
  }
  
  // Find the matching end
  const tabsEnd = findMatchingEnd(input, tabsStart);
  if (tabsEnd === -1) {
    return input;
  }
  
  const before = input.substring(0, tabsStart);
  const tabsComponent = input.substring(tabsStart, tabsEnd + 1);
  const after = input.substring(tabsEnd + 1);
  
  const converted = convertSingleTabsComponent(tabsComponent, depth);
  
  return before + converted + after;
}

function findMatchingEnd(content: string, startIndex: number): number {
  let i = startIndex + 5; // Skip '<Tabs'
  let braceCount = 0;
  let inString = false;
  let stringChar = '';
  
  while (i < content.length) {
    const char = content[i];
    
    // Handle string literals
    if (!inString && (char === '"' || char === "'" || char === '`')) {
      inString = true;
      stringChar = char;
    } else if (inString && char === stringChar) {
      // Check if it's escaped
      let backslashCount = 0;
      let j = i - 1;
      while (j >= 0 && content[j] === '\\') {
        backslashCount++;
        j--;
      }
      if (backslashCount % 2 === 0) {
        inString = false;
      }
    }
    
    if (!inString) {
      if (char === '{') {
        braceCount++;
      } else if (char === '}') {
        braceCount--;
      } else if (char === '/' && i + 1 < content.length && content[i + 1] === '>') {
        if (braceCount === 0) {
          return i + 1; // Found self-closing />
        }
      } else if (content.substring(i, i + 7) === '</Tabs>') {
        if (braceCount === 0) {
          return i + 6; // Found closing </Tabs>
        }
      }
    }
    
    i++;
  }
  
  return -1;
}

function convertSingleTabsComponent(component: string, depth: number): string {
  try {
    // Extract the tabs array
    const tabsLabels = extractTabsLabels(component);
    if (tabsLabels.length === 0) {
      return '';
    }
    
    // Extract content fragments
    const contentFragments = extractContentFragments(component);
    
    // Generate headings
    const level = Math.min(6, 2 + depth);
    const hashes = '#'.repeat(level);
    
    const blocks: string[] = [];
    const minLength = Math.min(tabsLabels.length, contentFragments.length);
    
    for (let i = 0; i < minLength; i++) {
      let fragmentContent = contentFragments[i];
      
      // Recursively process nested Tabs in this fragment
      fragmentContent = processTabsOnce(fragmentContent, depth + 1);
      
      blocks.push(`${hashes} ${tabsLabels[i]}\n\n${fragmentContent}`.trim());
    }
    
    return blocks.join('\n\n');
  } catch (error) {
    console.warn('Error converting Tabs component:', error);
    return '';
  }
}

function extractTabsLabels(component: string): string[] {
  const labels: string[] = [];
  
  // Find tabs={...}
  const tabsMatch = component.match(/tabs\s*=\s*\{([^}]*(?:\{[^}]*\}[^}]*)*)\}/);
  if (!tabsMatch) {
    return labels;
  }
  
  const tabsContent = tabsMatch[1];
  
  // Check if it's an array of objects with label property
  if (tabsContent.includes('label:')) {
    const labelMatches = tabsContent.matchAll(/label\s*:\s*["']([^"']+)["']/g);
    for (const match of labelMatches) {
      labels.push(match[1]);
    }
  } else {
    // Simple array of strings
    const stringMatches = tabsContent.matchAll(/["']([^"']+)["']/g);
    for (const match of stringMatches) {
      labels.push(match[1]);
    }
  }
  
  return labels;
}

function extractContentFragments(component: string): string[] {
  const fragments: string[] = [];
  
  // Find content={...}
  const contentMatch = component.match(/content\s*=\s*\{([\s\S]*)\}(?=\s*(?:\/>|>))/);
  if (!contentMatch) {
    return fragments;
  }
  
  let contentStr = contentMatch[1].trim();
  
  // Remove outer array brackets
  if (contentStr.startsWith('[') && contentStr.endsWith(']')) {
    contentStr = contentStr.slice(1, -1);
  }
  
  // Find React fragments
  const fragmentPattern = /<>([\s\S]*?)<\/>/g;
  let match;
  
  while ((match = fragmentPattern.exec(contentStr)) !== null) {
    fragments.push(match[1].trim());
  }
  
  return fragments;
}