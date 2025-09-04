
import Link from 'next/link';
export default function LegalAndSupport() {
return(
    <div className="flex justify-between gap-4 md:gap-10 lg:gap-20 no whitespace-nowrap items-center  text-textnormal text-xs md:text-sm">
        <Link href="#" >Privacy Policy</Link>
        <Link href="#" >Terms of Service</Link>
        <Link href="/contact" >Support</Link>
    </div>
)

}
