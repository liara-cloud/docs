// components/EditOnGitHubLink.jsx
import { useRouter } from "next/router";
import { GoPencil } from "react-icons/go";

const EditOnGitHubLink = () => {
  const router = useRouter();
  const path = router.asPath.replace(/\/$/, "");
  const githubUrl = `https://github.com/liara-cloud/docs/blob/master/src/pages${path}.mdx`;

  return (
    <div
      dir="ltr"
      className="text-blue-500"
      style={{ textAlign: "right", marginTop: "2em" }}
    >
      <a
        href={githubUrl}
        className="flex gap-2 bg-[#0e9cff34] hover:bg-[#0e9cff24] transition-all w-[max-content] py-1 rounded-lg align-center border-gray-400 px-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        ویرایش در گیت‌هاب
        <GoPencil className="mt-[4px]" />
      </a>
    </div>
  );
};

export default EditOnGitHubLink;
