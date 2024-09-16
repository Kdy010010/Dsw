export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { id, comment } = req.body;
        const discussion = discussions.find(disc => disc.id == id);
        if (discussion) {
            discussion.comments.push(comment);
            res.status(200).json(discussion);
        } else {
            res.status(404).json({ error: 'Discussion not found' });
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}

// 게시글 데이터 (같은 discussions 배열 사용)
import { discussions } from './discussions';
