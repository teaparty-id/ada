export function useDiscord() {
  async function fetchGuildData() {
    return await $fetch(
      "https://discord.com/api/v9/invites/qqrmaDUQvV?with_counts=true",
    );
  }

  return {
    fetchGuildData,
  };
}
