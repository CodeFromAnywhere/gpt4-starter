import * as React from "react";
type HandleModal = (newModal: ModalContent, title?: string) => void;
type ModalContent = JSX.Element | string | null;
type ModalType = {
    modalContent: ModalContent;
    handleModal: HandleModal;
    showModal: boolean;
    title?: string;
};
export declare const ModalContext: React.Context<ModalType>;
export declare const useModal: () => ModalType;
export declare const ModalProvider: ({ children }: {
    children: any;
}) => JSX.Element;
export declare function Modal(): JSX.Element;
export {};
//# sourceMappingURL=Modal.native.d.ts.map