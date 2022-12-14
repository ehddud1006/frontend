import enter from 'assets/images/icons/enter.png';
import heart from 'assets/images/icons/heart-unfilled.png';
import theme from 'assets/theme';
import Button from 'components/atoms/Button';
import { useCreateComment } from 'hooks/business/article';
import { useState, useCallback } from 'react';

import { Comment, Reply, ReplyPostInput } from './styles';

const ArticleComment = ({ element, articleId }: any) => {
  const [replyOpen, setReplyOpen] = useState(false);
  const [comment, setComment] = useState('');
  const commentId = element.id;
  const { createComment } = useCreateComment();

  const onChangeContent = useCallback(e => {
    setComment(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      createComment({
        body: {
          content: comment,
          parent_id: commentId,
        },
        articleId: articleId,
      });
      setComment('');
    },
    [articleId, comment, commentId],
  );

  return (
    <>
      <Comment key={element.id}>
        <div className="comment-info">
          <span className="nick-name">닉네임</span>
          <span className="date">2022.03.12 10:00</span>
        </div>
        <div className="comment">{element.content}</div>
        <div className="comment-response">
          <Button
            buttonType="outlined"
            radius="round"
            color="black"
            onClick={() => setReplyOpen(prev => !prev)}
            css={{
              padding: '3px 15px 2px',
              border: 'solid 1px #707070',
              color: '#777',
              fontSize: theme.fontSize[12],
              cursor: 'pointer',
            }}>
            답글
          </Button>
        </div>
      </Comment>
      {replyOpen && (
        <>
          {element.children?.map((reply: any, index: number) => (
            <Reply key={index}>
              <div className="nickname-wrap">
                <img src={enter} alt="enter" />
                <span className="nickname">닉네임</span>
              </div>
              <div className="reply-wrap">
                <div className="reply">{reply.content}</div>
              </div>
            </Reply>
          ))}

          <form onSubmit={onSubmit}>
            <ReplyPostInput>
              <img src={enter} alt="enter" />
              <div className="input-wrap">
                <input
                  value={comment}
                  onChange={onChangeContent}
                  type="text"
                  placeholder="내용을 입력해주세요."
                />
                <Button
                  buttonType="contained"
                  color="yellow"
                  radius="square"
                  css={{
                    marginLeft: '14px',
                  }}>
                  등록
                </Button>
              </div>
            </ReplyPostInput>
          </form>
        </>
      )}
    </>
  );
};

export default ArticleComment;
