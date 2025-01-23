import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const OrderCard = ({ selectedButton }: { selectedButton: number | null }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"orange"}
          size={"sm"}
          className={cn("bg-orange-400 ", selectedButton ? "" : "hidden")}
        >
          Order
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="pb-5">gift card.</DialogTitle>
          <hr className="pb-5 content-center" />
          <DialogDescription asChild>
            <div className="flex flex-col space-y-4">
              <p>
                Submit a gift card purchase request by entering your name and
                phone number.
              </p>
              <Input type="text" placeholder="Name" />
              <PhoneInput
                inputStyle={{ width: "100%" }}
                country={"am"}
                value={"sd"}
                placeholder="Phone number"
              />
              <hr />
              <div className="flex justify-between">
                <div className="rounded_div text-orange-500 hover:text-orange-400 font-black px-4">{selectedButton} Դ</div>
                <Button variant={"orange"} size={"sm"}>
                    Confirm
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default OrderCard;
