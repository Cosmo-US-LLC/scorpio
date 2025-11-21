import { useState } from "react"
import Modal from "./Modal"
import Spinner from "./Spinner"
import { useAccount } from "@/presale-gg/web3"
import { api } from "@/presale-gg/api"
import toast from "react-hot-toast"

/**
 * @typedef {import("./Modal").ModalProps} ModalProps
 * 
 * @param {Omit<ModalProps, "title">} others
*/
const ContactModal = (others) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [loading, setLoading] = useState(false)
  const accountData = useAccount()

  const submit = async () => {
    if (!name) return toast.error("Name must be provided")
    if (!email) return toast.error("Email must be provided")
    if (!email.includes("@")) return toast.error("Email is invalid")
    setLoading(true);
    try {
      await api.postLeads({
        email,
        name,
        mobile,
        wallet_address: accountData.address,
      });
      toast.success("Successfully submitted details");
      others.onClose();
    } catch (err) {
      const msg = api.getApiErrorMessage(err, "Error submitting details");
      if (msg.toLowerCase() === "user details already exist") {
        toast(msg);
        others.onClose?.();
        return setLoading(false);
      }
      toast.error(msg);
    }
    setLoading(false);
  };

  return (
    <Modal {...others} title="Stay in Touch">
      <p>Submit your details to stay in touch with the latest news.</p>
      {[
        {label: "Name", value: name, setter: setName, placeholder: "John Smith"},
        {label: "Email", value: email, setter: setEmail, placeholder: "john.smith@email.com"},
        {label: "Mobile (optional)", value: mobile, setter: setMobile, placeholder: "(555) 555-1234"},
      ].map((item, i) => (
        <div className="space-y-[5px]" key={i}>
          <p className="text-[14px] font-[700]">{item.label}</p>
          <div className="px-2 rounded-[8px] walletinput_bg">
            <div className="px-1 flex justify-between items-center">
              <div className="w-[80%] ">
                <input
                  type="text"
                  className="py-2 w-full text-[#fff] text-[14.85px] font-[700] outline-none bg-transparent placeholder:opacity-50"
                  value={item.value}
                  onChange={(e) => item.setter(e.target.value)}
                  placeholder={item.placeholder}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      <button
        className="btn-primary !text-[#000] hover:brightness-[120%] items-center justify-center flex"
        onClick={submit}
      >
        {loading ? <Spinner size={6} className="" /> : "Submit"}
      </button>
    </Modal>
  )
}

export default ContactModal