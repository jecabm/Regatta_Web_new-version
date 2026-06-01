import { Spinner } from "@/components/ui/spinner";

/** Route-level loading state shown during navigation/streaming. */
export default function Loading() {
  return (
    <div className="grid min-h-[60vh] place-items-center">
      <Spinner label="Loading page" />
    </div>
  );
}
