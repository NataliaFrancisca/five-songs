import Image from "next/image";
import { useRefContext } from "@/context/ref-context";
import { htmlToImageConvert } from "@/utils/convert-image";
import styled from "styled-components";

const ButtonStyle = styled.button`
    display: flex;
    align-self: flex-end;
    margin-right: 20px;
`

const ButtonDownload = () => {
    const { refContext } = useRefContext();

    const convertHtmlToImage = async() => {
        await htmlToImageConvert(refContext);
    }

    return(
        <ButtonStyle id="btn-download" onClick={() => convertHtmlToImage()}>
            <Image src="icon/download.svg" alt="icon download" width={20} height={20}/>
        </ButtonStyle>
    )
}

export default ButtonDownload;