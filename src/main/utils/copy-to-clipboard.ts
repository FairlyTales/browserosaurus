import { clipboard, Notification } from 'electron'

const copyToClipboard = (string: string): boolean => {
  if (string) {
    clipboard.writeText(string)
    new Notification({
      title: 'Browserosaurus',
      body: 'URL copied to clipboard',
      silent: true,
    }).show()
    return true
  }

  return false
}

export default copyToClipboard
