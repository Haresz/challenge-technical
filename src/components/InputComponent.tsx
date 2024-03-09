import React from "react";
import { Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { Eye, EyeClosed } from "@phosphor-icons/react";

export default function InputComponent(props: any) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div className="container-input w-full lg:w-auto mb-8">
      <Text
        textColor={props.color || "#666666"}
        className="text-lg font-semibold "
        mb="8px"
      >
        {props.placeholder}
      </Text>
      <InputGroup width={props.width} size="lg">
        <Input
          type={show ? "text" : props.type}
          name={props.name}
          placeholder={props.placeholder}
          borderRadius={50}
          px={8}
          textColor={props.color}
          onChange={props.onChange}
        />
        {props.type == "password" ? (
          <InputRightElement className="mr-4" width="4.5rem">
            <button type="button" onClick={handleClick}>
              {!show ? <EyeClosed size={32} /> : <Eye size={32} />}
            </button>
          </InputRightElement>
        ) : null}
      </InputGroup>
      {props.handleError && (
        <div className="text-red-600 mt-2 font-bold">
          {JSON.stringify(props.handleError)}
        </div>
      )}
    </div>
  );
}
