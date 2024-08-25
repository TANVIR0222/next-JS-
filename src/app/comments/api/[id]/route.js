export async function PATCH(request,{params}) {
    const body = await request.json();
    const index = conmments.findIndex((c) => c.id === request.params.id)
    conmments[index] = {
        text:body.text
    }
    return Response.json({
        message:"comment updated",
        conmments
    })
}


const conmments =[
    {
        id:1,
        text:'comments1'
    },
    {
        id:2,
        text:'comments2'
    },
    {
        id:3,
        text:'comments3'
    },
]