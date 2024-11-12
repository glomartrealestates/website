"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Index from "../app/(pages)/home/page"
export default function Home() {

  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, []);

  return (
    <div >
      
    </div>
  );
}
