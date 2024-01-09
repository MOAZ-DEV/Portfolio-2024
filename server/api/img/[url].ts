import list from "../../../public/projects.json";
import fs from "node:fs";

export default
    defineEventHandler((event) => {

        let result: any,
            CallName = getRouterParam(event, 'url');

        list.forEach( p =>
            p.img === CallName ? result = fs.readFileSync(`public/images/${CallName}`) : null);;

        return result;
    })

/** */