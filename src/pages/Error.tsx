import React from 'react'

export default function Error() {
    return (
        <section className="max-h-full">
            <div className="container mx-auto flex flex-wrap">
                <div className="w-full lg:w-8/12 px-4 pt-36 text-[#EC407A]">
                    <div className="my-4">
                        <h2 className="text-3xl font-bold md:text-6xl">Oops!</h2>
                    </div>
                    <div className="text-xl font-semibold">Maaf, Halaman Tidak ditemukan</div>
                </div>
            </div>
            <div className="w-full mt-40 pb-10">
                <hr className="h-px bg-[#0031d248] border-0"></hr>
            </div>
        </section>
    )
}
