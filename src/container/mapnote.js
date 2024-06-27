import { Button, Flex, Input, InputArea, TextP } from "../components";
import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { MdDone } from "react-icons/md";

export const Map = () => {
  const [isShowContainer, setShowContainer] = useState(true);
  const [isShowCards, setShowCards] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [allCards, setAllCards] = useState([]);
  const [numHeader, setNumHeader] = useState(1);

  const onSave = () => {
    setNumHeader(numHeader + 1);
    setAllCards((prevCards) => [
      ...prevCards,
      {
        id: allCards.length,
        title: "Header " + numHeader,
        message: "Your message...",
      },
    ]);
  };

  const onEdit = (id, title, message) => {
    const newCards = allCards.map((e) => {
      if (e.id === id) {
        return {
          id: e.id,
          title: title,
          message: message,
        };
      } else {
        return e;
      }
    });
    setAllCards(newCards);
    setIsEdit(false);
  };

  const onDelGrid = (id) => {
    const newCards = allCards.filter((e) => e.id !== id);
    setAllCards(newCards);
  };

  return (
    <Flex background="#7A3FFE" width="100%" height="100vh">
      <Flex
        className="container"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        {isShowContainer ? (
          <TextP
            fontSize="2rem"
            color="white"
            cursor="pointer"
            onClick={() => {
              setShowContainer(false);
            }}
            hovercolor="#ffc107"
          >
            <Button
              border="2px solid white"
              borderRadius="10px"
              background="transparent"
              color="yellow"
              fontSize="2rem"
              fontFamily="Ubuntu"
              fontWeight="bold"
              textShadow="1px 0px 4px rgba(255,255,255,0.6)"
              hovercolor="red"
              hoverborder="3px solid #f1f1f1"
              hoverboxShadow="3px 0px 18px 0px rgba(0,0,0,0.75)"
              hovertextShadow=" 5px -1px 7px rgba(0,0,0,0.6)"
            >
              Get Start
            </Button>
          </TextP>
        ) : (
          <Flex
            background="#FEFEFE"
            justifyContent="flex-start"
            flexDirection="column"
            width="1080px"
            bord="1px solid white"
            borderRadius="10px"
            className="shadow"
            height="80%"
            padding="2rem"
            gap="1rem"
            overflow="scroll"
          >
            <Flex
              className="Empty"
              background="#F6F6F6"
              bord="1px solid #DBDBDB"
              borderRadius="10px"
              justifyContent="center"
              alignItems="center"
              width="200px"
              height="200px"
              hoverBackground="#f1f1f1"
              cursor="pointer"
              onClick={() => {
                setShowCards(true);
                onSave();
              }}
            >
              <TextP
                color="#D4D4D4"
                fontSize="7rem"
                width="100%"
                textAlign="center"
              >
                +
              </TextP>
            </Flex>
            <br />
            {isShowCards ? (
              <Flex gap="1rem">
                <Grid
                  onSave={onSave}
                  allCards={allCards}
                  setAllCards={setAllCards}
                  setIsEdit={setIsEdit}
                  isEdit={isEdit}
                  title={title}
                  message={message}
                  setMessage={setMessage}
                  setTitle={setTitle}
                  onDelGrid={onDelGrid}
                  onEdit={onEdit}
                />
              </Flex>
            ) : null}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export const Grid = ({
  onSave,
  allCards,
  setAllCards,
  setIsEdit,
  title,
  message,
  setMessage,
  setTitle,
  onDelGrid,
  onEdit,
}) => {
  return (
    <>
      <>
        {/* <Flex
          className="form"
          background="#FEEF73"
          flexDirection="column"
          alignItems="center"
          width="250px"
          bord="1px solid #FEEF73"
          borderRadius="10px"
          padding="1rem"
          height="250px"
        >
          <Input
            type="text"
            placeholder="Header on me"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            background="transparent"
            border="transparent"
            textAlign="center"
          />
          <InputArea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            color="black"
            width="100%"
            background="transparent"
            border="transparent"
            height="10rem"
            margin="1rem 0"
            resize="none"
          />
          <Flex className="Button" gap="1rem">
            <Button
              onClick={() => {
                onSave(title, message);
                setIsEdit(false);
                setTitle("");
                setMessage("");
              }}
              background="#9880D2"
              border="1px solid #9880D2"
              borderRadius="10px"
              textAlign="center"
              width="4rem"
              height="1.7rem"
              hoverBackground="#B1B1B1"
              hoverborder="1px solid #B1B1B1"
            >
              <MdDone size="1rem" />
            </Button>
          </Flex>
        </Flex> */}
      </>

      {allCards.length > 0 && (
        <Flex
          justifyContent="center"
          alignItems="center"
          gap="1rem"
          flexWrap="wrap"
        >
          {allCards.map((card) => {
            return (
              <Note
                card={card}
                key={card.id}
                allCards={allCards}
                setAllCards={setAllCards}
                onDelGrid={onDelGrid}
                onEdit={onEdit}
              />
            );
          })}
        </Flex>
      )}
    </>
  );
};

export const Note = ({ card, allCards, setAllCards, onDelGrid, onEdit }) => {
  const [modeEdit, setModeEdit] = useState(false);
  const [title, setTitle] = useState(card.title);
  const [message, setMessage] = useState(card.message);
  const saveNote = (id, title, message) => {
    onEdit(id, title, message);
    setModeEdit(false);
  };

  return (
    <Flex
      className="form"
      background="#FEEF73"
      alignItems="center"
      flexDirection="column"
      width="250px"
      bord="1px solid #FEEF73"
      borderRadius="10px"
      padding="1rem"
      height="280px"
      boxShadow="5px 4px 10px 0px rgba(0,0,0,0.75)"
    >
      {modeEdit ? (
        <>
          <Input
            type="text"
            placeholder="Header on me"
            value={title}
            width="200px"
            height="24px"
            onChange={(e) => setTitle(e.target.value)}
            background="transparent"
            border="transparent"
            textAlign="center"
            fontFamily="Kanit"
          />
          <InputArea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            color="black"
            width="200px"
            whiteSpace="wrap"
            background="transparent"
            border="transparent"
            height="10rem"
            margin="1rem 0"
            resize="none"
            fontFamily="Kanit"
            textAlign="center"
          />
          <Flex className="Button" gap="1rem" justifyContent="center">
            <Button
              onClick={() => {
                saveNote(card.id, title, message);
              }}
              background="#9880D2"
              border="1px solid #9880D2"
              borderRadius="10px"
              textAlign="center"
              width="4rem"
              height="1.7rem"
              hoverBackground="#B1B1B1"
              hoverborder="1px solid #B1B1B1"
            >
              <MdDone size="1rem" />
            </Button>
          </Flex>
        </>
      ) : (
        <>
          <Flex
            // overflow="hidden"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <TextP
              width="200px"
              height="44px"
              textAlign="center"
              fontFamily="Kanit"
              overflow="hidden"
              whiteSpace="wrap"
            >
              {card.title}
            </TextP>
            <TextP
              width="200px"
              height="150px"
              textAlign="center"
              fontFamily="Kanit"
              overflow="hidden"
              whiteSpace="wrap"
            >
              {card.message}
            </TextP>
          </Flex>

          <Flex className="Button" gap="1rem" justifyContent="center">
            <Button
              onClick={() => setModeEdit(true)}
              background="#9880D2"
              border="1px solid #9880D2"
              borderRadius="10px"
              textAlign="center"
              width="4rem"
              height="1.7rem"
              hoverBackground="#B1B1B1"
              hoverborder="1px solid #B1B1B1"
            >
              <FaPencilAlt size="1rem" />
            </Button>

            <Button
              onClick={() => onDelGrid(card.id)}
              background="#9880D2"
              border="1px solid #9880D2"
              borderRadius="10px"
              textAlign="center"
              width="4rem"
              height="1.7rem"
              hoverBackground="#B1B1B1"
              hoverborder="1px solid #B1B1B1"
            >
              <FaTrash size="0.95rem" />
            </Button>
          </Flex>
        </>
      )}
    </Flex>
  );
};
