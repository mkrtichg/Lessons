
/*

create tree1 and tree2 from nodes (function, which will take argument nodes and returns the tree1/tree2)

nodes = [
    {id: 1, parentId: null},
    {id: 2, parentId: 1},
    {id: 3, parentId: 1},
    {id: 4, parentId: 2},
    {id: 5, parentId: 2},
    {id: 6, parentId: 3},
    {id: 7, parentId: 4},
    {id: 8, parentId: 7},
    {id: 9, parentId: 8},
]

tree1 = {
    1:{
        2: {
            4: {
                7: {
                    8: {
                        9: {}
                    }
                }
            },
            5: {}
        },
        3: {
            6: {}
        }
    }
}

tree2 = {
    id: 1,
    children: [
        {
            id: 2,
            children: [
                {id: 4, children: [
                    {id: 7, children: [
                        {id: 8, children: [
                            {id: 9, children: []}
                        ]}
                    ]}
                ]},
                {id: 5, children: []}
            ]
        },
        {
            id: 3,
            children: [
                {id: 6, children: []}
            ]
        }
    ]
}

*/



nodes = [
    { id: 1, parentId: null },
    { id: 2, parentId: 1 },
    { id: 3, parentId: 1 },
    { id: 4, parentId: 2 },
    { id: 5, parentId: 2 },
    { id: 6, parentId: 3 },
    { id: 7, parentId: 4 },
    { id: 8, parentId: 7 },
    { id: 9, parentId: 8 },
]

const tree1 = {};

drawTree1(nodes, tree1);


function drawTree1(arr, list) {
    debugger;

    if(arr.length === 0) return;

    if (arr.find(item => item.parentId === null)) {
        let main = arr.filter(item => item.parentId === null && item.id === 1);
            list[main[0].id] = {}
            let branches = arr.filter(item => item.parentId === 1)
            for (let branch of branches) {
                list[main[0].id][branch.id] = {};
            }

            list = list[main[0].id]
        
    } else {
        let keysObj = Object.keys(list);
        keysObj.forEach(key => {
            let branches = arr.filter(item => item.parentId === +key)
            for (let branch of branches) {
                list[key][branch.id] = {};
            }

        })

        list = list[keysObj[0]]

    }

    arr.shift();

    return drawTree1(arr, list)

}




// not
function drawTree2(arr, list) {
    debugger
   

}
