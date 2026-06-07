import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { teamMembersQuery } from "@/sanity/queries";
import { Section, SectionHeading } from "@/components/ui/section";

type Member = {
  _id: string;
  name: string;
  role: string;
  bio?: string;
  linkedIn?: string;
};

export async function TeamSection() {
  const members = (await client.fetch(teamMembersQuery)) as Member[];
  if (members.length === 0) return null;

  return (
    <Section size="wide">
      <SectionHeading
        eyebrow="The team"
        title="The people behind Regatta Registers"
        description="A team of industry practitioners and engineers building the compliance tools they wished they had."
      />
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {members.map((member) => (
          <div key={member._id} className="text-center">
            <div className="mx-auto h-24 w-24 overflow-hidden rounded-full bg-ink-100">
              <div className="h-full w-full bg-gradient-to-br from-brand-100 to-brand-200" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-ink-900">{member.name}</h3>
            <p className="text-sm text-ink-500">{member.role}</p>
            {member.bio && (
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{member.bio}</p>
            )}
            {member.linkedIn && (
              <Link
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs text-ink-400 hover:text-brand-600 transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                LinkedIn
              </Link>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
