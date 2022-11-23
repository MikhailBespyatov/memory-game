import React, { FC } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';

interface Props {
    src: string;
    opened?: boolean;
    onClick: () => void;
}

export const MemoryCard: FC<Props> = ({src, onClick, opened}) => {

    return src ? (
    <div className={cn(styles.card, {[styles.card_open]: opened})} onClick={onClick}>
        <div className={styles.wrapper}>
            <div className={styles.card_opened}><div><img src={src} alt='game' /></div></div>
            <div className={styles.card_closed}>
                <div><span>Card</span></div>
            </div>
        </div>
    </div>
    ) : (<div className={styles.emptyCard}></div>)
}