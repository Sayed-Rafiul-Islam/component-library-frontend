import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-6xl font-bold mt-20">Installation</h1>
      <p className="dark:text-slate-600 mt-2">First we have install <b>Shadcn</b> as many components here are built using shadcn.ui</p>
      <p className="dark:text-slate-600 mt-2">Go to <Link className="dark:text-slate-300 text-slate-600 font-bold dark:hover:text-white hover:text-black transition-all" target="_blank" href='https://ui.shadcn.com/docs/installation/next'>Shadcn-UI</Link></p>
    </div>
  );
}
