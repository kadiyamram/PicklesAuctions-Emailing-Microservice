import EmailDeliveryServiceContract from "./contracts/EmailContract";
import NodeMailerService from "./nodeMailerService";
import { NodeMailerServiceConstant } from "./ServiceConstant";

export default class EmailServiceFactory{
    static getServiceInstance(serviceName?: string): EmailDeliveryServiceContract{
        switch (serviceName) {
            case NodeMailerServiceConstant:
                return new NodeMailerService();
                break;
        
            default:
                return new NodeMailerService();
                break;
        }
    }
}