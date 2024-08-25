export async function GET(){

    return Response.json({
        conmments
    })
}


export async function POST(request) {
    const newConmment = await request.json();
    conmments.push({
        id:conmments.length + 1,
        text : newConmment.text
    })

    return Response.json({
        message: 'new comments add ',
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