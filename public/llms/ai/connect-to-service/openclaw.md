Original link: https://docs.liara.ir/ai/connect-to-service/openclaw/

# اتصال هوش مصنوعی به OpenClaw

[OpenClaw](https://openclaw.ai/?utm_source=liara.ir) یک فریم‌ورک متن‌باز است که برنامه چت مورد علاقه شما (مثل تلگرام، واتساپ، دیسکورد و ...) را  
به AI Agentهای حوزه برنامه‌نویسی مثل [Pi](https://pi.ai/onboarding/pi-intro?utm_source=liara.ir) متصل می‌کند.  
تنها کافیست تا شما یک Gateway را روی سیستم خود (یا یک سرور مثل [سرور مجازی لیارا](https://liara.ir/products/cloud-server/)) اجرا کنید و این فرآیند به پلی میان اپلیکیشن‌های پیام‌رسان و یک دستیار هوش مصنوعی همیشه در دسترس تبدیل می‌شود.

## اتصال هوش مصنوعی لیارا به OpenClaw

برای اتصال API هوش مصنوعی لیارا به OpenClaw بایستی گام‌های زیر را طی کنید:  

۱. اتصال به سرور مجازی / باز کردن ترمینال   
در صورتی که قصد دارید OpenClaw را بر روی سرور مجازی خود نصب کنید، با [دسترسی SSH](https://docs.liara.ir/iaas/ubuntu/how-tos/connect-to-server-using-ssh/) به سرور مجازی خود متصل شوید.  
در غیر این‌صورت، ترمینال را در سیستم‌عامل فعلی خود، باز کنید.

۲. ایجاد پروژه هوش مصنوعی در لیارا   
طبق [مستندات ایجاد پروژه هوش مصنوعی](https://docs.liara.ir/ai/quick-start/) یک پروژه هوش مصنوعی ایجاد کنید. در صورتی  
که از قبل پروژه هوش مصنوعی را ساخته‌اید، برای پروژه خود، طبق [مستندات ساخت کلید](https://docs.liara.ir/ai/details/keys/#create)، یک کلید ایجاد کنید و هر دو مقدار baseUrl و API Key را در جای امنی، ذخیره کنید.

۳. نصب سریع OpenClaw   
با اجرای دستور زیر، OpenClaw را بر روی سرور خود نصب کنید:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash

for Windows (PowerShell): 
iwr -useb https://openclaw.ai/install.ps1 | iex
```

با اجرای دستور فوق، ماژول‌ها و پکیج‌های مورد نیاز، در صورت نصب نبودن بر روی سیستم،  
نصب می‌شوند:

```bash
🦞 OpenClaw Installer
The only bot Mark can't train on your DMs.

✓ Detected: linux

Install plan
OS: linux
Install method: npm
Requested version: latest

[1/3] Preparing environment
· Node.js not found, installing it now
· Installing Node.js via NodeSource
· Installing Linux build tools (make/g++/cmake/python3)
✓ Build tools installed
✓ Node.js v22 installed
· Active Node.js: v22.22.0 (/usr/bin/node)
· Active npm: 10.9.4 (/usr/bin/npm)

[2/3] Installing OpenClaw
✓ Git already installed
· Installing OpenClaw v2026.2.25

✓ OpenClaw npm package installed
✓ OpenClaw installed

[3/3] Finalizing setup

🦞 OpenClaw installed successfully (2026.2.25)!
Finally unpacked. Now point me at your problems.
```

در ادامه، OpenClaw توضیحاتی در مورد نسخه و اطلاعات اولیه، سپس یک هشدار طولانی درباره امنیت و ریسک‌ها نشان می‌دهد. در ادامه باید گزینه `Yes` را انتخاب کنید؛ سپس در بخش `Onboarding mode` گزینه `QuickStart` را انتخاب کنید:

```bash
· Starting setup


🦞 OpenClaw  2026.2.25 (4b5d4a4) — I don't judge, but your missing API keys are absolutely judging you.


▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██░▄▄▄░██░▄▄░██░▄▄▄██░▀██░██░▄▄▀██░████░▄▄▀██░███░██
██░███░██░▀▀░██░▄▄▄██░█░█░██░█████░████░▀▀░██░█░█░██
██░▀▀▀░██░█████░▀▀▀██░██▄░██░▀▀▄██░▀▀░█░██░██▄▀▄▀▄██
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
                  🦞 OPENCLAW 🦞

┌  OpenClaw onboarding
│
◇  Security ─────────────────────────────────────────────────────────────────────────────────╮
│                                                                                            │
│  Security warning — please read.                                                           │
│                                                                                            │
│  OpenClaw is a hobby project and still in beta. Expect sharp edges.                        │
│  By default, OpenClaw is a personal agent: one trusted operator boundary.                  │
│  This bot can read files and run actions if tools are enabled.                             │
│  A bad prompt can trick it into doing unsafe things.                                       │
│                                                                                            │
│  OpenClaw is not a hostile multi-tenant boundary by default.                               │
│  If multiple users can message one tool-enabled agent, they share that delegated tool      │
│  authority.                                                                                │
│                                                                                            │
│  If you’re not comfortable with security hardening and access control, don’t run           │
│  OpenClaw.                                                                                 │
│  Ask someone experienced to help before enabling tools or exposing it to the internet.     │
│                                                                                            │
│  Recommended baseline:                                                                     │
│  - Pairing/allowlists + mention gating.                                                    │
│  - Multi-user/shared inbox: split trust boundaries (separate gateway/credentials, ideally  │
│    separate OS users/hosts).                                                               │
│  - Sandbox + least-privilege tools.                                                        │
│  - Shared inboxes: isolate DM sessions (`session.dmScope: per-channel-peer`) and keep      │
│    tool access minimal.                                                                    │
│  - Keep secrets out of the agent’s reachable filesystem.                                   │
│  - Use the strongest available model for any bot with tools or untrusted inboxes.          │
│                                                                                            │
│  Run regularly:                                                                            │
│  openclaw security audit --deep                                                            │
│  openclaw security audit --fix                                                             │
│                                                                                            │
│  Must read: https://docs.openclaw.ai/gateway/security                                      │
│                                                                                            │
├────────────────────────────────────────────────────────────────────────────────────────────╯
│
◇  I understand this is personal-by-default and shared/multi-user use requires lock-down. Continue?
│  Yes
│
◇  Onboarding mode
│  QuickStart
│
◇  QuickStart ─────────────────────────╮
│                                      │
│  Gateway port: 18789                 │
│  Gateway bind: Loopback (127.0.0.1)  │
│  Gateway auth: Token (default)       │
│  Tailscale exposure: Off             │
│  Direct to chat channels.            │
│                                      │
├──────────────────────────────────────╯
```

در ادامه، بایستی در بخش `Model/auth provider`، گزینه `Custom Provider` را انتخاب کنید:

```bash
│
◇  Model/auth provider
│  Custom Provider
```

در ادامه، باید در بخش‌های `API Base URL` و `API Key (leave blank if not required)` به ترتیب، baseUrl و کلید API هوش مصنوعی لیارا را که در مرحله قبل ایجاد کردید، قرار دهید:

```bash
◇  API Base URL
│  https://ai.liara.ir/api/XXXX/v1
│
◇  API Key (leave blank if not required)
│  XXXXXX
```

سپس، بایستی در بخش `Endpoint compatibility` گزینه `OpenAI-compatible` را انتخاب کرده و در بخش `Model ID`، نام کامل مدل خود را که در پلن انتخابی‌تان در لیارا، ارائه می‌شود، قرار دهید و سپس صبر کنید تا پیام **.Verification successful** نمایش داده شود:

```bash
◇  Endpoint compatibility
│  OpenAI-compatible
│
◇  Model ID
│  openai/gpt-4.1-mini
│
◇  Verification successful.
```

در ادامه، یک `Endpoint ID` و `Model alias (optional)` دلخواه برای API خود، قرار دهید:

```bash
◇  Endpoint ID
│  liara-ai
│
◇  Model alias (optional)
│  gpt

Configured custom provider: liara-ai/openai/gpt-4.1-mini
```

در ادامه، تنظیمات مربوط به چنل‌ها و سایر پیکربندی‌ها به شما نمایش داده می‌شود.  
آن‌ها را می‌توانید بنا به نیاز خود تنظیم یا رد کنید. در نهایت سرویس Gateway برای شما نصب خواهد شد:

```bash
◇  Select channel (QuickStart)
│  Mattermost (plugin)

◇  Install Mattermost plugin?
│  Skip for now

◇  Channel setup
│  mattermost does not support onboarding yet.

Config warnings:
- duplicate mattermost plugin detected (ignored)

Workspace OK
Sessions OK

◇  Skills status
│  Eligible: 4
│  Missing requirements: 40
│  Unsupported: 7

◇  Configure skills now?
│  Skip for now

◇  Install missing skill dependencies
│  Skip for now

◇  Set GOOGLE_PLACES_API_KEY? → No
◇  Set GEMINI_API_KEY? → No
◇  Set NOTION_API_KEY? → No
◇  Set OPENAI_API_KEY (image-gen)? → No
◇  Set OPENAI_API_KEY (whisper)? → No
◇  Set ELEVENLABS_API_KEY? → No

◇  Hooks
│  Skip for now

Config warnings:
- duplicate mattermost plugin (ignored)

◇  Systemd configuration
│  Enabled systemd lingering for root.

◇  Gateway service runtime
│  Node.js (default)

◒  Installing Gateway service…
✓  Gateway service installed.
```

در ادامه، به شما لینکی به همراه توکن برای دسترسی به داشبرد OpenClaw داده می‌شود:

```bash
◇  Control UI ─────────────────────────────────────────────────────────────────────╮
│                                                                                  │
│  Web UI: http://127.0.0.1:18789/                                                 │
│  Web UI (with token):                                                            │
│  http://127.0.0.1:18789/#token=df6b676da0b6a840a418402a2cb23633cc47a99b09ed3d64  │
│  Gateway WS: ws://127.0.0.1:18789                                                │
│  Gateway: reachable                                                              │
│  Docs: https://docs.openclaw.ai/web/control-ui                                   │
│                                                                                  │
├──────────────────────────────────────────────────────────────────────────────────╯
```

لینک را به همراه توکن داده شده، کپی کنید و در نهایت، برای دسترسی به داشبرد OpenClaw، می‌توانید دسترسی SSH خود را ببندید و مجدداً با دستور زیر، آن را باز کنید:

```bash
ssh -N -L 18789:127.0.0.1:18789 root@IP
```

به جای IP، آدرس IP سرور مجازی خود را بگذارید. در صورتی که از سرور مجازی استفاده نمی‌کنید.  
نیازی به اجرای دستور فوق نیست.

اکنون می‌توانید وارد آدرس داده شده در داشبرد شوید و از OpenClaw استفاده کنید

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
