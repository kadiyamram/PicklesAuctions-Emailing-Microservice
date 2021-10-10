import Email from "../../models/email";

export default abstract class EmailDeliveryServiceContract{
    public abstract sendMail(Email: Email): Promise<any>;
}