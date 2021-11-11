import Layout from "../../components/Layout"
import Head from "next/head"
import Link from "next/link"
import Highlight from "react-highlight"

export default () => (
    <Layout>
        <Head>
            <title>
                استفاده از Voyager در برنامه‌های Laravel - سرویس ابری لیارا
            </title>
        </Head>

        <h1>استفاده از Voyager در برنامه‌های Laravel</h1>
        <p>شما برای استفاده از پکیج <a href="https://github.com/the-control-group/voyager" target="_blank">Voyager</a> در برنامه‌های <Link href="/app-deploy/laravel/getting-started">Laravel</Link> باید در قدم اول پکیج <span className="code">tcg/voyager</span> را در بخش <span className="code">dont-discover</span> فایل <span className="code">composer.json</span> برنامه‌ی خود اضافه کنید:</p>
        <Highlight className="json">{`"extra": {
    "laravel": {
        "dont-discover": [
            "tcg/voyager"
        ]
    }
},`}</Highlight>

        <p>سپس  در قدم بعد باید فایل <span className="code">config/app.php</span> را به شکل زیر تغییر دهید تا <span className="code">VoyagerServiceProvider</span> و <span className="code">VoyagerDummyServiceProvider</span> فقط در حالت production به پیکربندی برنامه اضافه شوند:</p>

        <Highlight className="php">{`<?php

$results = [

    /*
    ** default config
    */
    
];

if (env('APP_ENV') === 'production') {
    $results['providers'][] = "TCG\\Voyager\\VoyagerServiceProvider";
    $results['providers'][] = "TCG\\Voyager\\Providers\\VoyagerDummyServiceProvider";
}

return $results;`}</Highlight>

    </Layout>
);
