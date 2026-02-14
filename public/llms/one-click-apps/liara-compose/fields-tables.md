Original link: https://docs.liara.ir/one-click-apps/liara-compose/fields-tables/

# جدول فیلدهای Liara Compose

فایل `liara-comose.yaml` شامل فیلدهای متفاوتی است که هر کدام می‌توانند مقادیر متفاوتی داشته باشند؛ در ادامه در جدول زیر، به توضیح هریک از این فیلدها، پرداخته شده است:

به عنوان یک مثال، فایل `liara-compose.yaml` زیر را می‌توانید در لیارا، مستقر کنید:

```yaml
apps:
  - id: "wordpress"
    name: "WordPress"
    image: "registry.c2.liara.ir/one-click-apps/wordpress:6-php7.4"
    bundlePlanID: "standard"
    planID: "small-g2"
    disks:
      - name: "tmp"
        mountTo: "/tmp"
        size: 10
        maxSize: 0.5
      - name: "data"
        mountTo: "/var/www/html"
    port: 80
    envs:
      WORDPRESS_DB_HOST: "$DB_main_HOST:$DB_main_PORT"
      WORDPRESS_DB_USER: "$DB_main_USER"
      WORDPRESS_DB_PASSWORD: "$DB_main_PASSWORD"
      WORDPRESS_DB_NAME: "$DB_main_NAME"
      PHP_INI_CONFIG: |
        file_uploads = On
        memory_limit = 256M
        upload_max_filesize = 64M
        post_max_size = 128M
        max_execution_time = 600

databases:
  - type: "mariadb"
    id: "main"
    version: "10.6.8"
    bundlePlanID: "standard"
    planID: "small-g2"


## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
