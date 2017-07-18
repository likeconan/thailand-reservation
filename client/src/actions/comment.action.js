export function toggleComment(open) {
    return {
        type: 'TOGGLE_COMMENT_DIALOG',
        payload: open
    }
}