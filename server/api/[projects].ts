import list from "../../public/projects.json";
export default
    defineEventHandler((event) => {
        let FinalList: any,
            CallName = getRouterParam(event, 'projects');

        (CallName == "projects-list") ?
            FinalList = list : null;
        list.forEach(p =>
            p.title === CallName ? FinalList = p : null);;

        return {
            results: FinalList
        }
    })
/** */