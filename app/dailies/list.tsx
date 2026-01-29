import { supabase } from "@/lib/supabase";

export default async function DailyList() {
    const { data: dailies, error } = await supabase.from("dailies").select("*").order("created_at", { ascending: false });

    if (error) {
        return <div>Error loading dailies: {error.message}</div>;
    }

    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold mb-4">日報一覧</h2>

            <div className="grid grid-cols-1 gap-4">
                {dailies?.map((daily) => (
                    <div className="w-full">
                        <div className="border-r border-b border-l border-gray-200 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div className="mb-8">
                                <div className="mb-2">
                                    <span className="text-gray-700 font-bold text-xl ">{daily.title}</span>
                                </div>
                                <p className="text-gray-500 text-base">{daily.content}</p>
                            </div>
                            <div className="flex items-center">
                            <div className="text-sm">
                                <p className="text-gray-600">{new Date(daily.created_at).toLocaleDateString()}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}