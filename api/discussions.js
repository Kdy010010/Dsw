export default async function handler(req, res) {
    if (req.method === 'GET') {
        // 모든 게시글 가져오기
        const discussions = await getDiscussions();
        res.status(200).json(discussions);
    } else if (req.method === 'POST') {
        // 새로운 게시글 추가
        const { title, content } = req.body;
        const newDiscussion = { id: Date.now(), title, content, comments: [] };
        await addDiscussion(newDiscussion);
        res.status(201).json(newDiscussion);
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}

// 메모리에 데이터 저장
let discussions = [];

async function getDiscussions() {
    return discussions;
}

async function addDiscussion(discussion) {
    discussions.push(discussion);
}
