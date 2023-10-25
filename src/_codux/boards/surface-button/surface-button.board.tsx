import { createBoard } from '@wixc3/react-board';
import '@radix-ui/themes/styles.css';
import { Theme, Button } from '@radix-ui/themes';
import surfaceCover from '../../../_codux/covers/surfaceCover.png'

export default createBoard({
    name: 'surfaceButton',
    Board: () => <Theme><Button variant='surface'>Hello</Button></Theme>,
    isSnippet: true,
    cover: surfaceCover
});
