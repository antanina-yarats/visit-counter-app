
import { renderFile, configure } from "./deps.js";


configure({
    views: `${Deno.cwd()}/views/`,  
});

const responseDetails = {
    headers: {"Content-Type": "text/html;charset=UTF-8"},
};

const data = {
    count: 0,
}

const handleRequest = async (request) => {

    const url = new URL(request.url);
    const pathname = url.pathname;

    if(pathname === "/visits") {
        data.count ++;
        return new Response(await renderFile("count.eta", data), responseDetails);
    } else if (pathname === "/meaning") {
        return new Response("Seeking truths beyond meaning of life, you will find 43.");
    } else {
        return new Response("Nothing here yet");
    }

   
}

Deno.serve({port: 7777}, handleRequest);