import Layout from "../../components/Layout";
import Head from "next/head";
import Notice from "../../components/Notice";
import Label from "../../components/Label";

export default () => (
    <Layout>
        <Head>
            <title>مستندات API دیتابیس‌ها در لیارا</title>
        </Head>
        <h4>فهرست عناوین:</h4>
        <ul className="mt-0">
            <li><a href="#create-database">راه‌اندازی دیتابیس</a></li>
            <li><a href="#remove-database">حذف دیتابیس</a></li>
            <li><a href="#start-database">روشن کردن دیتابیس</a></li>
            <li><a href="#stop-database">خاموش کردن دیتابیس</a></li>
            <li><a href="#resize-database">تغییر اندازه دیتابیس</a></li>
            <li><a href="#create-backup">ایجاد فایل پشتیبان</a></li>
            <li><a href="#backups-list">لیست تمام فایل‌های پشتیبان</a></li>
            <li><a href="#download-backup">دریافت فایل پشتیبان</a></li>
            <li><a href="#get-database-details">دریافت مشخصات یک دیتابیس مشخص</a></li>
            <li><a href="#databases-list">دریافت مشخصات تمام دیتابیس‌ها</a></li>
        </ul>

        <Notice>
            در صورتی که با هر گونه ابهامی در استفاده از API مواجه شدید، از طریق
            تیکت با پشتیبانی لیارا ارتباط بگیرید.
        </Notice>

        <br />
        <hr />

        <h4 id="create-database">راه‌اندازی دیتابیس</h4>
        <div className="endpoint">
            <Label variant="blue">POST</Label>
            <span className="endpoint__path">/v1/databases</span>
        </div>


        <h5>ورودی‌ها</h5>
        <table className="endpoint-inputs">
            <tr className="endpoint-inputs__group">
                <td colSpan={3}>BODY</td>
            </tr>
            <tr>
                <td>hostname</td>
                <td>mysql-db</td>
                <td className="endpoint-inputs__description"></td>
            </tr>
            <tr>
                <td>publicNetwork</td>
                <td>true</td>
                <td className="endpoint-inputs__description"></td>
            </tr>
            <tr>
                <td>planID</td>
                <td>ir-small</td>
                <td className="endpoint-inputs__description"></td>
            </tr>
            <tr>
                <td>type</td>
                <td>mysql</td>
                <td className="endpoint-inputs__description"></td>
            </tr>
            <tr>
                <td>version</td>
                <td>8.0</td>
                <td className="endpoint-inputs__description"></td>
            </tr>
        </table>

        <br />
        <hr />

        <h4 id="remove-database">حذف دیتابیس</h4>
        <div className="endpoint">
            <Label variant="red">DELETE</Label>
            <span className="endpoint__path">/v1/projects/<span className="endpoint__param">{`{database-id}`}</span></span>
        </div>

        <h5>ورودی‌ها</h5>
        <table className="endpoint-inputs">
            <tr className="endpoint-inputs__group">
                <td colSpan={3}>URL</td>
            </tr>
            <tr>
                <td>database-id</td>
                <td className="endpoint-inputs__description">شناسه دیتابیس</td>
            </tr>
        </table>

        <br />
        <hr />

        <h4 id="start-database">روشن کردن دیتابیس</h4>
        <div className="endpoint">
            <Label variant="blue">POST</Label>
            <span className="endpoint__path">/v1/projects/<span className="endpoint__param">{`{database-id}`}</span>/actions/scale</span>
        </div>

        <h5>ورودی‌ها</h5>
        <table className="endpoint-inputs">
            <tr className="endpoint-inputs__group">
                <td colSpan={3}>URL</td>
            </tr>
            <tr>
                <td>database-id</td>
                <td className="endpoint-inputs__description">شناسه دیتابیس</td>
            </tr>
            <tr className="endpoint-inputs__group">
                <td colSpan={3}>BODY</td>
            </tr>
            <tr>
                <td>scale</td>
                <td>1</td>
                <td className="endpoint-inputs__description"></td>
            </tr>
        </table>

        <br />
        <hr />

        <h4 id="stop-database">خاموش کردن دیتابیس</h4>
        <div className="endpoint">
            <Label variant="blue">POST</Label>
            <span className="endpoint__path">/v1/projects/<span className="endpoint__param">{`{database-id}`}</span>/actions/scale</span>
        </div>

        <h5>ورودی‌ها</h5>
        <table className="endpoint-inputs">
            <tr className="endpoint-inputs__group">
                <td colSpan={3}>URL</td>
            </tr>
            <tr>
                <td>database-id</td>
                <td className="endpoint-inputs__description">شناسه دیتابیس</td>
            </tr>
            <tr className="endpoint-inputs__group">
                <td colSpan={3}>BODY</td>
            </tr>
            <tr>
                <td>scale</td>
                <td>0</td>
                <td className="endpoint-inputs__description"></td>
            </tr>
        </table>

        <br />
        <hr />

        <h4 id="resize-database">تغییر اندازه دیتابیس</h4>
        <div className="endpoint">
            <Label variant="blue">POST</Label>
            <span className="endpoint__path">/v1/databases/<span className="endpoint__param">{`{database-id}`}</span>/resize</span>
        </div>

        <h5>ورودی‌ها</h5>
        <table className="endpoint-inputs">
            <tr className="endpoint-inputs__group">
                <td colSpan={3}>URL</td>
            </tr>
            <tr>
                <td>database-id</td>
                <td className="endpoint-inputs__description">شناسه دیتابیس</td>
            </tr>
            <tr className="endpoint-inputs__group">
                <td colSpan={3}>BODY</td>
            </tr>
            <tr>
                <td>disk</td>
                <td>false</td>
                <td className="endpoint-inputs__description"></td>
            </tr>
            <tr>
                <td>planID</td>
                <td>ir-standard</td>
                <td className="endpoint-inputs__description"></td>
            </tr>
        </table>

        <br />
        <hr />

        <h4 id="create-backup">ایجاد فایل پشتیبان</h4>
        <div className="endpoint">
            <Label variant="blue">POST</Label>
            <span className="endpoint__path">/v1/databases/<span className="endpoint__param">{`{database-id}`}</span>/backups</span>
        </div>

        <h5>ورودی‌ها</h5>
        <table className="endpoint-inputs">
            <tr className="endpoint-inputs__group">
                <td colSpan={3}>URL</td>
            </tr>
            <tr>
                <td>database-id</td>
                <td className="endpoint-inputs__description">شناسه دیتابیس</td>
            </tr>
        </table>

        <br />
        <hr />

        <h4 id="backups-list">لیست تمام فایل‌های پشتیبان</h4>
        <div className="endpoint">
            <Label variant="green">GET</Label>
            <span className="endpoint__path">/v1/databases/<span className="endpoint__param">{`{database-id}`}</span>/backups</span>
        </div>

        <br />
        <hr />

        <h4 id="download-backup">دریافت فایل پشتیبان</h4>
        <div className="endpoint">
            <Label variant="blue">POST</Label>
            <span className="endpoint__path">/v1/databases/<span className="endpoint__param">{`{database-id}`}</span>/<span className="endpoint__param">{`{backups-name}`}</span>/download</span>
        </div>

        <h5>ورودی‌ها</h5>
        <table className="endpoint-inputs">
            <tr className="endpoint-inputs__group">
                <td colSpan={3}>URL</td>
            </tr>
            <tr>
                <td>database-id</td>
                <td className="endpoint-inputs__description">شناسه دیتابیس</td>
            </tr>
            <tr>
                <td>backups-name</td>
                <td className="endpoint-inputs__description">نام فایل پشتیبان</td>
            </tr>
        </table>

        <br />
        <hr />

        <h4 id="get-database-details">دریافت مشخصات یک دیتابیس مشخص</h4>
        <div className="endpoint">
            <Label variant="green">GET</Label>
            <span className="endpoint__path">/v1/databases/<span className="endpoint__param">{`{database-id}`}</span></span>
        </div>

        <h5>ورودی‌ها</h5>
        <table className="endpoint-inputs">
            <tr className="endpoint-inputs__group">
                <td colSpan={3}>URL</td>
            </tr>
            <tr>
                <td>database-id</td>
                <td className="endpoint-inputs__description">شناسه دیتابیس</td>
            </tr>
        </table>

        <br />
        <hr />

        <h4 id="databases-list">دریافت مشخصات تمام دیتابیس‌ها</h4>
        <div className="endpoint">
            <Label variant="green">GET</Label>
            <span className="endpoint__path">/v1/databases</span>
        </div>

        <br />
        <hr />
    </Layout>
)
