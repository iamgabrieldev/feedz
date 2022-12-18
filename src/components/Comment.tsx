import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'

import { Avatar } from './Avatar'

import styles from './Comment.module.css'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount]  = useState(0)
    
    const handleDeleteComment = () => {
        onDeleteComment(content);
    }

    const handleLikeComment = () => {
       setLikeCount(likeCount+1); 
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/iamGabrielDev.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Oliveira</strong>
                            <time title='10 de Novembro às 14:46h' dateTime="2022-11-10 14:46:59">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment}  title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
