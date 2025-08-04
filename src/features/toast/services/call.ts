import toast from "react-hot-toast"

export const callToast = (error: boolean, message:string) => {
    if (error)
        toast.error(message)
    toast.success(message);
}