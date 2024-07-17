import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

export const Notification = ({
  text,
  message,
}: {
  text: string;
  message: string;
}) => {
  const { toast } = useToast();

  return (
    <Button
      className="underline"
      onClick={() => {
        toast({
          title: "System Message",
          description: message,
        });
      }}
    >
      {text}
    </Button>
  );
};
