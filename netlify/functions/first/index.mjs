export default async ((req,ctx )=>{
    const {name} = ctx.params;
    if(name){
        return new Response(`Hello, ${name}`)
    }

    return new Response("Deu certo porra!");
});