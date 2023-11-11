import { toPng } from 'html-to-image';

export const htmlToImageConvert = async(elementRef: HTMLElement | null) => {
    console.log('elementRef', elementRef);
    if(elementRef){
        toPng(elementRef, { cacheBust: false })
        .then((dataUrl) => {
            const link = document.createElement("a");
            link.download = "my-image-name.png";
            link.href = dataUrl;
            link.click();
        })
        .catch((err) => {
            console.log(err);
        });
    }
};
