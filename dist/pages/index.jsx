import { Inter } from "@next/font/google";
import TestBtn from "@/src/lib/TestBtn/TestBtn";
// import styles from '@/styles/Home.module.css'
var inter = Inter({ subsets: ["latin"] });
export default function Home() {
    return (<>
      <TestBtn title="title test"/>
    </>);
}
