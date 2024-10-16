import Link from "next/link";
import { Button } from "./ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";


const Contacts = () => {
    return (
        <section className="mt-8 space-x-4">
            <Button variant="outline" size="icon">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <GitHubLogoIcon className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                </Link>
            </Button>
            <Button variant="outline" size="icon">
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <LinkedInLogoIcon className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                </Link>
            </Button>
            <Button variant="outline" size="icon">
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <TwitterLogoIcon className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                </Link>
            </Button>
            <Button variant="outline" size="icon">
                {/* <Link href="mailto:johndoe@example.com">
                    <MailL className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                </Link> */}
            </Button>
      </section>
    );
};

export default Contacts;