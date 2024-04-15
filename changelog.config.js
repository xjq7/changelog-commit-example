module.exports = {
  matcher: (rawCommitInfo) => {
    const { message, description: rawDescription } = rawCommitInfo;

    const [, type, scope, description] =
      message.match(/([^:]+)(?:\((.*?)\))?:\s?(.+)/) || [];

    if (!type || !description) return false;

    return {
      type,
      scope,
      description,
    };
  },
};
