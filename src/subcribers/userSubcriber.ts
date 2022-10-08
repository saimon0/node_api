import { eventEmitter } from "../app";
import { UserManager } from "../service/UserManager";

eventEmitter.on('userRequest', ( data: any ) => {
    let userManager: UserManager = new UserManager();
    console.log(data);
    return userManager.getName();
})

eventEmitter.on('defaultPath', ( data: any ) => 
    printInfo("opened */* path")
)

function printInfo(info: string): string {
    return info;
}