import { supabase } from "@/lib/supabase";

export default function DailyForm({}) {
    async function createDaily(formData: FormData) {
        "use server";
        const title = formData.get("title")?.valueOf();
        const content = formData.get("content")?.valueOf();

        const { data, error } = await supabase.from("dailies").insert([
        {
            title: title as string,
            content: content as string,
        },
        ]);
        console.log({ data, error });
    }
    return (
        <form action={createDaily}>
          <div>
            <h1 className="text-4xl font-bold mb-4">日報を作成する</h1>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="col-span-1 mb-4">
              <label htmlFor="day" className="d-block">日付</label>
              <input type="text" name="day" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-500" />
            </div>
            <div className="col-span-2 mb-4">
              <label htmlFor="title" className="d-block">題名</label>
              <input type="text" name="title" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-500" />
            </div>
          </div>
          <div className="grid col-span-1 mb-4">
            <div className="grid-cols-1 mb-4">
              <label htmlFor="content" className="d-block">内容</label>
              <textarea name="content" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-500" />
            </div>
          </div>
          <div className="mb-4">
            <input type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" value="日報を作成する" />
          </div>
        </form>
    )
}