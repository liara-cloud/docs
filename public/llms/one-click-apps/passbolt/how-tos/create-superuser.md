Original link: https://docs.liara.ir/one-click-apps/passbolt/how-tos/create-superuser/

# ساخت superuser

پس از ایجاد برنامه Passbolt، شما بایستی طبق [مستندات خط فرمان برنامه](https://docs.liara.ir/paas/details/console-shell)، وارد خط  
فرمان برنامه Passbolt خود شوید و قطعه کد زیر را در آن، اجرا کنید:

```sh
su -m -c "/usr/share/php/passbolt/bin/cake \\
    passbolt register_user \\
      -u YOUR_EMAIL \\
      -f YOUR_NAME \\
      -l YOUR_LASTNAME \\
      -r admin" -s /bin/sh www-data
```

در قطعه کد فوق، بایستی به جای عبارات `YOUR_EMAIL`، `YOUR_NAME` و `YOUR_LASTNAME`، اطلاعات  
خود را، وارد کنید. 

در ادامه و پس از اجرای دستور فوق، یک لینک جدید برای شما ایجاد می‌شود؛ در ادامه، یک نمونه از خروجی دستور فوق، قرار گرفته است:

```json
     ____                  __          ____  
    / __ \\____  _____ ____/ /_  ____  / / /_ 
   / /_/ / __ `/ ___/ ___/ __ \/ __ \/ / __/ 
  / ____/ /_/ (__  |__  ) /_/ / /_/ / / /    
 /_/    \__,_/____/____/_.___/\____/_/\__/   

 Open source password manager for teams
-------------------------------------------------------------------------------
User saved successfully.
To start registration follow the link provided in your mailbox or here: 
https://friendly-roentgen-ucusldf73.liara.run/setup/start/785d0fd1-e2-a785-88afddd3809c
```

سپس، لینک قرار گرفته را کپی کرده و در مرورگر وارد آن شوید؛ پس از آن، کافیست تا مراحل راه‌اندازی برنامه را جلو بروید تا  
برنامه به درستی برای شما، پیکربندی شود.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
