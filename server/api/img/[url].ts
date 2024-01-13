import list from "../../../public/projects.json";
import {readFileSync} from "node:fs";
import path from "node:path";

export default
    defineEventHandler((event) => {

        let result: any,
            filePath:string,
            CallName = getRouterParam(event, 'url');

        list.forEach(p =>
            p.img === CallName ? () => {
                filePath = path.join(
                    process.cwd(),
                    'public/images/',
                    `${CallName}.png`);
                result = readFileSync(filePath);
            } : null);

        return result;
    })

