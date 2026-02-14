Original link: https://docs.liara.ir/paas/nodejs/fix-common-errors/graphql-error/

# رفع خطای GET query missing در GraphQL

قابلیت Playground در Apollo Server در محیط Production به‌صورت پیش‌فرض غیرفعال است. برای فعال‌سازی، لازم است تا فیلدهای `introspection` و `playground` را برابر با  `true` تنظیم و سپس استقرار کنید:

```js
const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./schema');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
