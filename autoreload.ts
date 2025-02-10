import {user} from "./user"
import {CustomEvent} from "./custom.event";
mp.events.add("playerWeaponShot", () => {
    if (!user || !user.login || user.cuffed ) return;
    if (user.currentAmmo === 0){
        CustomEvent.triggerServer('inventory:reload:weapon')
        return;
    }
})
