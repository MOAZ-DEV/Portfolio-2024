import list from "../../../public/projects.json";
import fs from "node:fs";
import path from "node:path";

export default
    defineEventHandler((event) => {

        let result: any,
            filePath,
            CallName = getRouterParam(event, 'url');

        list.forEach(p =>
            p.img === CallName ? () => {
                filePath = path.join(
                    process.cwd(),
                    'public/images/',
                    `${CallName}.png`);
                result = fs.promises.readFile(filePath, 'utf-8');
            } : null);

        return result;
    })

