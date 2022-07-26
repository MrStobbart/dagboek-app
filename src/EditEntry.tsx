import { Button, Col, Input, InputNumber, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";
export type EditEntryProps = {};

export default function EditEntry() {
  const [title, setTitle] = useState<string | undefined>();
  const [rating, setRating] = useState<number | undefined>();
  const [content, setContent] = useState<string | undefined>();

  return (
    <div>
      <Col span={18} offset={3}>
        <Row justify="center">
          <Col span={12}>
            <Input
              addonBefore="Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </Col>
          <Col span={12}>
            <InputNumber
              min={1}
              max={10}
              onChange={setRating}
              value={rating}
              addonBefore="Rating"
            />
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <TextArea
              value={content}
              onChange={(event) => setContent(event.target.value)}
              autoSize={{ minRows: 8 }}
            />
          </Col>
        </Row>
        <Button onClick={() => console.log({ title, rating, content })}>
          Save changes
        </Button>
      </Col>
    </div>
  );
}
