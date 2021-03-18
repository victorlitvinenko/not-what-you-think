/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { Button, Form, Media } from 'react-bootstrap';
import request from '../../api/api';
import UserStore from '../../stores/user-store';
import Rate from '../Rate/Rate';
import styles from './feedback.module.scss';

type PropsType = {
  t: Record<string, string>;
  data: Record<string, string | number>[];
  id: string;
};

const Feedback: React.FC<PropsType> = ({ t, data, id }) => {
  const [value, setValue] = useState<string>('');
  const [stars, setStars] = useState<number>(0);
  const [feedbacks, setFeedbacks] = useState<Record<string, string | number>[]>(
    []
  );
  const userName = UserStore.userInfo.name;

  useEffect(() => {
    setFeedbacks(data);
  }, [data]);

  const onSubmit = () => {
    if (value) {
      const sendObj = {
        text: value,
        userName,
        countryId: id,
        stars,
      };
      request('feedback', 'POST', sendObj);
      setFeedbacks([sendObj, ...feedbacks]);
      // country.addFeedback();
    }
  };

  return (
    <div className={styles.box}>
      <div className="mb-4">
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>{t.feedback}</Form.Label>
          <Form.Control
            onChange={(e) => setValue(e.target.value)}
            as="textarea"
            value={value}
            rows={3}
          />
        </Form.Group>
        <div className="df j46">
          <Button onClick={onSubmit} variant="success">
            {t.newFeedback}
          </Button>
          <Rate value={stars} onChange={setStars} />
        </div>
      </div>
      <div className={styles.feedback}>
        <ul className="list-unstyled">
          {feedbacks.map((item) => {
            return (
              <Media key={item._id} as="li">
                <Media.Body className={styles.body}>
                  <div className={styles.background} />
                  <div className={styles.header}>
                    <div className={styles.header_background} />
                    <h5>{item.userName}</h5>
                    <Rate
                      onChange={() => {}}
                      value={Number(item.stars)}
                      disabled
                    />
                  </div>
                  <div>
                    <p>{item.text}</p>
                  </div>
                </Media.Body>
              </Media>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Feedback;
