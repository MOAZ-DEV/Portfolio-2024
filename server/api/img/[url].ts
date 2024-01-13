import list from "../../../public/projects.json";
import fs from "node:fs";
import path from "node:path";

export default
    defineEventHandler((event) => {

        let result: any,
            CallName = getRouterParam(event, 'url');

        list.forEach(p =>
            p.img === CallName ? () => {
                const
                    filePath = path.join(process.cwd(), 'public/images/', `${CallName}.png`);
                result = fs.readFileSync(filePath);
            } : null);

        return result;
    })

/** */