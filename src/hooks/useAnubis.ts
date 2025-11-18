import { useToast } from '@/hooks/use-toast';

// This hook provides a function to check for bot submissions using a honeypot field.
export const useAnubis = () => {
  const { toast } = useToast();

  const isBot = (formData: FormData): boolean => {
    const honeypot = formData.get('anubis_honeypot');

    if (honeypot) {
      console.log("Anubis System: Bot detected in honeypot.");
      // We can optionally give the bot a fake success message to avoid suspicion.
      toast({
        title: "Success!",
        description: "Your submission has been received.",
      });
      return true;
    }

    return false;
  };

  return { isBot };
};