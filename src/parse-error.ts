const errorLineRx = /Custom program error: (0x[a-f0-9]+)/i

/**
 * Parses an error code included with solana logs
 *
 * @private
 */
export function errorCodeFromLogs(logs: string[]) {
  for (const line of logs) {
    const match = line.match(errorLineRx)
    if (match == null) continue
    const hexCode = match[1]
    try {
      return parseInt(hexCode)
    } catch (_: any) {}
  }
  return null
}
